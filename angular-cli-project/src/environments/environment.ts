// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.

export const environment = {
  production: false,
  URL_UPLOAD: 'http://localhost:5000/load-files/upload/course/',
  URL_PIC_UPLOAD: 'http://localhost:5000/load-files/upload/picture/',
  URL_EMAIL_FILE_UPLOAD: 'http://localhost:5000/file-reader/upload/course/'
};
