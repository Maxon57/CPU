from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('cpu/', include('cpu_utilization.urls')),
    path('api/', include('api.urls'))
]
