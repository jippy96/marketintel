
from django.urls import path
from . import views

from django.contrib import admin
from django.urls import path, include
from django.contrib.staticfiles.urls import staticfiles_urlpatterns

# my Own import below
from . import views

app_name = 'education'

urlpatterns = [
    path('', views.index, name="education_index"),
    
    path('garderie', views.garderie, name="education_garderie"),
    path('prescolaire', views.prescolaire, name="education_prescolaire"),
    path('prescolaire/<int:year>', views.prescolaire, name="education_prescolaire"),
    
    path('elementaire/<int:year>', views.elementaire, name="education_elementaire"),
    path('elementaire', views.elementaire, name="education_elementaire"),
    
    path('moyen', views.moyen, name="education_moyen"),
]

urlpatterns += staticfiles_urlpatterns()
