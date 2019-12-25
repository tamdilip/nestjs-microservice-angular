export class API {
  public static API_ENDPOINT: string = 'http://localhost:8081/hackathon';
  public static LOGIN: string = API.API_ENDPOINT + '/auth/login';
  public static REPORT_UPLOAD: string = API.API_ENDPOINT + '/file/upload/template';
  public static GET_ASSOCIATES: string = API.API_ENDPOINT + '/metrics/associates';
  public static GET_EVENTS_SUMMARY: string = API.API_ENDPOINT + '/metrics/events-summary';
  public static GET_EVENTS_INFORMATION: string = API.API_ENDPOINT + '/metrics/events-information';
}