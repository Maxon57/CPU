from django.urls import path
from cpu_utilization import views

urlpatterns = [
    path('', views.index, name='cpu'),
]
