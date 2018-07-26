import { fileDownloadService } from "../services/fileDownloadService";

import fileDownload from "js-file-download";

export const downloadFile = (path, fileName) => {
  return dispatch => {
    fileDownloadService.download(path).then(
      data => {
        fileDownload(data, fileName);
      },
      errors => {
        console.log("Error downloading file:" + path);
      }
    );
  };
};
