import { urlEndpoints, environment } from '../../environments/environment';
 
export class APIConstants {
  public static readonly baseUrl= urlEndpoints[window.location.hostname].baseUrl;
  
  /*
   * Some local files still needed for development.
   */
  // USER PAGES
  // local:
  public static readonly GET_USER_PAGES_URL: string = 'assets/api/roles.json?code=';
  // remote:
  // public static readonly GET_USER_PAGES_URL: string = urlEndpoints[window.location.hostname].baseUrl  + '/fmcwebapi/getUserPages?code=';
 
  // HOME PAGE
  // local:
  public static readonly GET_MOST_USED_REPORTS: string = 'assets/api/most-used-reports.json?userid=';
  // remote:
  // public static readonly GET_MOST_USED_REPORTS: string = urlEndpoints[window.location.hostname].baseUrl  + '/fmcwebapi/getUserMostUsedReports?userid=';
 
  public static readonly GET_OTHERS_VIEWED_REPORTS: string = 'assets/api/best-reports.json?userid=';
  /*
   * HELP PAGE
   */
  public static readonly GET_JOB_AIDS: string = 'assets/api/job-aids.json?userid=';
  public static readonly GET_ELEARNING: string = 'assets/api/elearning.json?userid=';
 
  // announcements related urls
  public static readonly GET_ANNOUNCEMENTS_URL = APIConstants.baseUrl + '/fmcwebapi/getAnnouncements?userid=';
  public static readonly CREATE_ANNOUNCEMENTS_URL = APIConstants.baseUrl + '/fmcwebapi/createAnnouncement';
  public static readonly DELETE_ANNOUNCEMENTS_URL = APIConstants.baseUrl + '/fmcwebapi/deleteAnnouncement?userName=gaupnv&id=';
  public static readonly GET_REPORTS_ANNOUNCEMENT_URL = APIConstants.baseUrl + '/fmcwebapi/getAllReports?userid=';
 
  // *** run-as-user related service url *** //
 
  // local file:
  //public static readonly GET_USERS_FOR_RUN_AS= "assets/api/users.json";
  public static readonly GET_USERS_FOR_RUN_AS = APIConstants.baseUrl + '/fmcwebapi/getAllExternalUsers';
  //public static readonly GET_USERS_FOR_RUN_AS = 'http://dlv-sys-w009-4:8143' + '/fmcwebapi/getAllExternalUsers';
 
  // local file:
  //public static readonly GET_USER_DETAILS_FOR_RUN_AS=assets/api/run-as-user-details.json'
  public static readonly GET_USER_DETAILS_FOR_RUN_AS = APIConstants.baseUrl + '/fmcwebapi/getImpersonateUserDetails?';
  //public static readonly GET_USER_DETAILS_FOR_RUN_AS = 'http://dlv-sys-w009-4:8143' + '/fmcwebapi/getImpersonateUserDetails?';
 
}
 