from django.urls import path
from . import views

urlpatterns = [
	path('', views.modele, name = 'modele'),
    path('pie-chart/', views.pie_chart, name='pie-chart'),
]

