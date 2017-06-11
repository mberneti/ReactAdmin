import React from 'react';
import DropzoneComponent from 'react-dropzone-component';
import { uploadIcon } from './icons';
import _ from 'lodash';
import * as urls from '../api/urls';

export default class BFileInput extends React.Component {
  constructor(props) {
    super(props);

    this.value = typeof props.value !== 'object' ? [] : props.value;

    this.state = { value: this.value };

    this.djsConfig = {
      init: this.init,
      autoProcessQueue: true,
      addRemoveLinks: true,
      acceptedFiles: props.acceptedFiles || "image/jpeg,image/png,image/gif",
      maxFilesize: props.maxFilesize || 1,
      thumbnailWidth: 250,
      thumbnailHeight: 250,
      dictRemoveFile: 'پاک کردن',
      dictResponseError: 'بروز خطا',
      dictDefaultMessage: 'آپلود فایل' + uploadIcon,
      dictCancelUpload: 'لغو آپلود',
      dictCancelUploadConfirmation: 'آیا از لغو آپلود مطمعن هستید؟',
      dictMaxFilesExceeded: 'شما نمی‌توانید فایل‌های بیشتری آپلود کنید!',
      dictInvalidFileType: 'فایل انتخاب شده غیر مجاز است!',
      dictFileTooBig: 'حجم فایل انتخاب شده بیش از حد مجاز است!',
      maxFiles: props.maxFiles

      // headers: {
      //   'Authorization': '123',
      //   // remove Cache-Control and X-Requested-With
      //   // to be sent along with the request
      //   'Cache-Control': null,
      //   'X-Requested-With': '123'
      // }
      
    };
    let files = [];

    this.componentConfig = {
       postUrl:props.postUrl||( urls.BASEFILEUPLOAD + (props.folderName || 'root') )
    };

    //init
    this.init = (dz) => {
      this.dropzone = dz;
    };


    // this.clearFiles = () => {
    //   this.dropzone.removeAllFiles(true);
    // }

    this.clearFiles = this.clearFiles.bind(this);

    //mock files
    this.setImages = (images) => {

      let dz = this.dropzone;

      if (typeof images === "undefined" || images === null)
        return;

      if (images.length <= 0)
        return;

      if (typeof images[0].url !== 'undefined' && _.findIndex(files, { name: images[0].name }) === -1)
        dz.removeAllFiles(true);
      //  dz.removeAllFiles(true);

      let mockFiles = [];

      for (let i = 0; i < images.length; i++) {

        if (typeof images[i].url !== 'undefined' && _.findIndex(files, { name: images[i].name }) === -1)
          mockFiles.push({
            name: images[i].name, size: 5000, isMock: true
            , serverFilename: images[i].name, serverImgUrl: images[i].url,
            accepted: true //it's important for limitations
          });
      }

      // setTimeout(function () {
      mockFiles.forEach(function (mockFile) {
        dz.emit('addedfile', mockFile);
        dz.emit('complete', mockFile);
        dz.files.push(mockFile);
      });
      // }, 300);

    };

    // If you want to attach multiple callbacks, simply
    // create an array filled with all your callbacks.
    // this.callbackArray = [() => console.log('Hi!'), () => console.log('Ho!')];

    // Simple callbacks work too, of course
    this.callback = (file) => {

      // If added file is a mock file
      // create thumbnail from url provided by server in mock file array
      if (file.isMock) {

        this.dropzone.createThumbnailFromUrl(file, file.serverImgUrl, null, true);

        files.push({ name: file.name, url: file.serverImgUrl });

        this.value = files;
        this.props.updateImagesHandler(files);

      }

    };

    this.success = (file, responseText) => {

      file.serverFilename = responseText.name;

      files.push({ name: responseText.name, url: responseText.url });

      this.value = files;
      this.props.updateImagesHandler(files);

    };

    this.removedfile = (file) => {

      // if (files.indexOf(file.serverFilename) !== -1)
      //   files.splice(files.indexOf(file.serverFilename), 1);

      _.remove(files, { name: file.serverFilename });

      this.value = files;
      this.props.updateImagesHandler(files);

    };

    this.dropzone = null;

  }
  clearFiles(){
    this.dropzone.removeAllFiles(true);
  }
  // fired after component render
  componentDidMount() {
    this.setImages(this.state.value);
  }

  // fired after value props changed
  componentWillReceiveProps(nextProps) {
    this.setState({ value: nextProps.value });
  }

  // fired after state changed
  shouldComponentUpdate(nextProps, nextState) {
    return (nextState.value || []).length > 0;
  }

  // fired after component render
  componentDidUpdate(prevProps, prevState) {
    this.setImages(this.state.value);
  }

  render() {

    const config = this.componentConfig;
    const djsConfig = this.djsConfig;

    // For a list of all possible events (there are many), see README.md!
    const eventHandlers = {
      init: this.init,
      drop: this.callbackArray,
      addedfile: this.callback,
      success: this.success,
      removedfile: this.removedfile
    };

    return <DropzoneComponent config={config} eventHandlers={eventHandlers} djsConfig={djsConfig} />
  }
}