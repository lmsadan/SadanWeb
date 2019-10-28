<template>
  <div class="wrapper release-tc">
    <div class="release-box">
      <h3>发布吐槽</h3>
      <div class="editor">
        <div
          v-quill:myQuillEditor="editorOption"
          class="quill-editor submit"
          :content="content"
          @change="onEditorChange($event)"
          @blur="onEditorBlur($event)"
          @focus="onEditorFocus($event)"
          @ready="onEditorReady($event)"
        />
        <div class="btns">
          <button class="sui-btn btn-danger btn-release" @click="save()">
            发布
          </button>
        </div>
        <div class="clearfix" />
      </div>
    </div>
    <div class="clearfix" />
  </div>
</template>

<script>
import '~/assets/css/page-sj-spit-submit.css'
import { quillRedefine } from 'vue-quill-editor-upload'
import spitApi from '@/api/spit'
export default {
  data () {
    return {
      content: '',
      editorOption: {}
    }
  },
  created () {
    this.editorOption = quillRedefine({
      uploadConfig: {
        action: '',
        res: (response) => {
          return response.info
        },
        name: 'img'
      }
    })
  },
  mounted () {
  },
  methods: {
    onEditorBlur (editor) {
    },
    onEditorFocus (editor) {
    },
    onEditorReady (editor) {
    },
    onEditorChange ({ editor, html, text }) {
      this.content = html
    },
    save () {
      spitApi.save({ content: this.content }).then((res) => {
        this.$message({
          message: res.data.message,
          type: (res.data.flag ? 'success' : 'error')
        })
        if (res.data.flag) {
          location.href = '/spit'
        }
      })
    }
  }
}
</script>

<style>
.submit{
  min-height: 300px;
  max-height: 400px;
  overflow-y: auto;
}
</style>
