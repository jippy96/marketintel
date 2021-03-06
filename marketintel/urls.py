"""marketintel URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/dev/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from django.contrib.staticfiles.urls import staticfiles_urlpatterns

# my Own import below
from . import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('post/', include('partage.urls', namespace='partage')),
    path('compte/', include('compte.urls', namespace='compte')),
    path('education/', include('education.urls')),
    path('themes/', include('theme.urls')),
    
    path('', views.home, name="home_index"),
    path('search/', views.search, name="home_search"),
    path('recherche/',views.recherche, name="recherche_results")
]

urlpatterns += staticfiles_urlpatterns()