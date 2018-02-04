from .common import *



# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = env('DJANGO_SECRET_KEY')

# https://docs.djangoproject.com/en/1.10/ref/settings/#s-allowed-hosts
ALLOWED_HOSTS = ['chifschallenge.co.uk','www.chifschallenge.co.uk', 'chifschallenge.herokuapp.com']

# STATIC FILE CONFIGURATION
# ------------------------------------------------------------------------------
# See: https://docs.djangoproject.com/en/dev/ref/settings/#static-root
CDN_STATIC_URL = 'https://d3fjj8r1act07f.cloudfront.net/'
STATIC_URL = 'https://d3fjj8r1act07f.cloudfront.net/'


# CUSTOM SETTINGS
# ------------------------------------------------------------------------------
GOOGLE_ANALYTICS_ENABLED = False
