from django.urls import path

from . import views

urlpatterns = [
# path('', views.post, name='post'),
path('<int:numero>/<str:nom>', views.detail, name="detail_theme")
]
app_name = 'theme'