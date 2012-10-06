'use strict';

angular.module('app.i18n', [])
  .constant('DEFAULTLANG', 'en')
  .service('langSrvc', function(modelSrvc, DEFAULTLANG, LANGDIRECTIONS) {
    var DEFAULTDIRECTION = 'ltr';
    function lang() {
      return modelSrvc.get('settings.lang') ||
             modelSrvc.get('lang') ||
             DEFAULTLANG;
    }
    function direction() {
      return LANGDIRECTIONS[lang()] || DEFAULTDIRECTION;
    }
    return {
      lang: lang,
      direction: direction
    };
  })
  .constant('LANGDIRECTIONS', {
    en: 'ltr',
    zh: 'ltr',
    fa: 'rtl',
    ar: 'rtl'
  })
  .constant('TRANSLATIONS', {
    zh: {
      WELCOME_TITLE: '欢迎到Lantern',
      WELCOME_PROMPT: '互联网为每个人的自由。',
      GIVE_ACCESS: '给访问',
      GET_ACCESS: '进入'
    },
    fa: {
      WELCOME_TITLE: '‫به انجمن خوش آمدید ‬‪Lantern‬',
      WELCOME_PROMPT: '‫آزادی اینترنت برای همه.‬',
      GIVE_ACCESS: '‫دسترسی‬',
      GET_ACCESS: '‫دسترسی‬'
    },
    ar: {
      WELCOME_TITLE: '‫مرحبا بكم في ‬‪Lantern‬',
      WELCOME_PROMPT: '‫حرية الإنترنت للجميع.‬',
      GIVE_ACCESS: '‫منح حق الوصول‬',
      GET_ACCESS: '‫احصل على دخول‬'
    },
    en: {
      WAITING_FOR_LANTERN: 'Waiting for Lantern...',
      UNEXPECTED_STATE_TITLE: 'Unexpected State',
      UNEXPECTED_STATE_PROMPT: 'The application is in an unexpected state. You can try refreshing, restarting Lantern, or resetting your settings if it happens again.',
      RESET: 'Reset',
      REFRESH: 'Refresh',
      SETTINGS_UNLOCK_TITLE: 'Unlock Settings',
      SETTINGS_UNLOCK_PROMPT: 'Enter your Lantern password to unlock your settings.',
      PASSWORD: 'password',
      PASSWORD_CONFIRM: 'confirm password',
      CREATE: 'Create',
      CREATED: 'Created',
      PASSWORDS_MUST_MATCH: 'Passwords must match',
      PASSWORD_INVALID: 'Password invalid',
      UNLOCK: 'Unlock',
      UNLOCKED: 'Unlocked',
      SETTINGS_LOAD_FAILURE_TITLE: 'Couldn’t Load Settings',
      SETTINGS_LOAD_FAILURE_PROMPT: 'Your settings could not be loaded and may be corrupt. Choose Reset to make a backup and then start over, or choose Quit to try to resolve the problem later.', // XXX we currently don't back up settings before wiping them
      NOTIFY_LANTERN_DEVS: 'Notify Lantern developers',
      UNEXPECTED_ERROR: 'An unexpected error has occurred.',
      QUIT: 'Quit',
      PASSWORD_CREATE_TITLE: 'Create Password',
      PASSWORD_CREATE_PROMPT: 'Create your Lantern password so your information can be stored securely.',
      WELCOME_TITLE: 'Welcome to Lantern',
      WELCOME_PROMPT: 'Internet freedom for everyone.',
      GIVE_ACCESS: 'Give Access',
      GET_ACCESS: 'Get Access',
      SIGNIN_TITLE: 'Sign in to Google Talk',
      SIGNIN_PROMPT: 'Lantern connects users all over the world together in a trust network. Signing in to Google Talk allows you to connect through users you know, and not just anyone.',
      SIGNIN_TIP_GTALK: 'If you have a Gmail account, you already have Google Talk. It’s the service that lets you chat with your contacts when they’re online. Your Google Talk userid is the same as your Gmail userid.',
      SIGNIN_TIP_SECURE: 'Your Google password is sent over a secure connection and is used only to sign in to Google Talk.',
      SIGNIN_TIP_SAVE_PASSWORD: 'Securely save your password in Lantern’s encrypted settings file.',
      SIGNIN_STATUS_BAD_CREDENTIALS: 'Invalid user and password combination',
      SIGNIN_STATUS_NOT_AUTHORIZED: 'User does not have Lantern access.', // XXX add "request invite" link?
      SIGNIN_STATUS_SERVICE_UNAVAILABLE: 'Could not connect to Google Talk.',
      GTALK_USERID: 'Google Talk userid',
      EMAIL_PLACEHOLDER: 'email@example.com',
      GTALK_PASSWORD: 'Google Talk password',
      SAVE_PASSWORD: 'Save password',
      PASSWORD_SAVED: 'password saved',
      START_OVER: 'Start over',
      CANCEL: 'Cancel',
      SIGN_IN: 'Sign in',
      SIGNING_IN: 'Signing in...',
      SIGNED_IN: 'Signed in',
      CONTINUE: 'Continue',
      CONFIGURING: 'Configuring...',
      GTALK_UNREACHABLE_TITLE: 'Could not connect to Google Talk',
      GTALK_UNREACHABLE_PROMPT: 'Lantern could not connect to Google Talk. An active Google Talk connection is required to facilitate connecting with other users. Lantern will keep trying to connect to Google Talk using the userid and password you provided.',
      RETRY_NOW: 'Retry now',
      RETRY_LATER: 'Retry later',
      SYSTEM_PROXY_TITLE: 'System Proxy',
      SYSTEM_PROXY_PROMPT: 'Lantern can be configured as your system proxy so your browser will use it automatically.',
      SYSTEM_PROXY_TRUE: 'Set Lantern as my system proxy (recommended)',
      SYSTEM_PROXY_FALSE: 'I will manually configure my browser to use Lantern.',
      SYSTEM_PROXY_ERROR: 'Proxy configuration failed',
      FINISHED_TITLE: 'Finished!',
      FINISHED_PROMPT: 'Thank you for joining Lantern. Your participation at this early stage is invaluable.',
      AUTOREPORT_PROMPT: 'Help improve Lantern even more. Securely report usage events (e.g. when Lantern experiences a problem) to Lantern developers automatically.',
      AUTOREPORT_ENABLE: 'Enable automatic reporting',
      FINISH: 'Finish',
      SIGNIN_DISCOVER_PROXIES_PROMPT: 'Lantern can connect to known proxies but will be unable to discover new ones until signed in to Google Talk.',
    }
  })
  // https://groups.google.com/d/msg/angular/641c1ykOX4k/hcXI5HsSD5MJ
  .filter('i18n', function(langSrvc, DEFAULTLANG, TRANSLATIONS) {
    return function(key) {
      if (typeof key == 'undefined') return '(translation key undefined. did you forget quotes?)';
      if (!key) return '';
      return (TRANSLATIONS[langSrvc.lang()] || {})[key] ||
             TRANSLATIONS[DEFAULTLANG][key] ||
             '(translation key "'+key+'" not found)';
    }
  });
