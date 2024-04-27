from rest_framework import serializers

from cpu_utilization.models import CpuInfo


class CPUSerializer(serializers.ModelSerializer):
    class Meta:
        model = CpuInfo
        fields = '__all__'
