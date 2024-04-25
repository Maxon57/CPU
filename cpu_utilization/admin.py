from django.contrib import admin
from cpu_utilization.models import CpuInfo


class CpuInfoAdmin(admin.ModelAdmin):
    list_display = (
        'data',
        'date'
    )


admin.site.register(CpuInfo, CpuInfoAdmin)
