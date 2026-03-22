/* ============================================================
   JUDDEV CORPORATION - Frontend Configuration
   Update API_URL when deploying to production
   ============================================================ */

const JUDDEV_CONFIG = {
  // API URL auto-détectée — fonctionne en local ET en production
  API_URL: window.location.origin + '/api',
  UPLOADS_URL: window.location.origin + '/uploads',

  getImageUrl(path) {
    if (!path) return '';
    if (path.startsWith('http://') || path.startsWith('https://')) return path;
    if (path.startsWith('/uploads/')) return window.location.origin + path;
    return path;
  }
};
