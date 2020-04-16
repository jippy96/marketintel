
from django.urls import path
from . import views

from django.contrib import admin
from django.urls import path, include
from django.contrib.staticfiles.urls import staticfiles_urlpatterns

# my Own import below
from . import views

app_name = 'education'

urlpatterns = [
    path('admin/', admin.site.urls),    
    path('', views.index, name="education_index"),
    path('garderie', views.garderie, name="education_garderie"),
]

urlpatterns += staticfiles_urlpatterns()
