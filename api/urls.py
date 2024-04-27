from django.urls import path, include
from rest_framework.routers import DefaultRouter

from api.views import CPUView

router = DefaultRouter()
router.register('cpu', CPUView, basename='cpu')

urlpatterns = [
    path('', include(router.urls))
]
