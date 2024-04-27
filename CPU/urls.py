from django.contrib import admin
from django.urls import path, include
from drf_yasg import openapi
from drf_yasg.views import get_schema_view
from rest_framework import permissions

schema_view = get_schema_view(
    openapi.Info(
        title="Product API",
        default_version='v1',
        description="Документация для приложения product проекта shop",
        license=openapi.License(name="BSD License"),
    ),
    public=True,
    permission_classes=(permissions.AllowAny,),
)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('api.urls')),
    path('api_doc/',
         schema_view.with_ui('swagger', cache_timeout=0),
         name='api_doc'),
    path('', include('cpu_utilization.urls')),
]
