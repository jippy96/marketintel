
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
    path('prescolaire', views.prescolaire, name="education_prescolaire"),
    path('prescolaire/<int:year>', views.prescolaire, name="education_prescolaire"),
    path('primaire', views.primaire, name="education_primaire"),
]

urlpatterns += staticfiles_urlpatterns()
