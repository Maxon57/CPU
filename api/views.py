from rest_framework import mixins, viewsets

from api.serializers import CPUSerializer
from cpu_utilization.models import CpuInfo


class CPUView(mixins.CreateModelMixin,
              mixins.ListModelMixin,
              viewsets.GenericViewSet):
    queryset = CpuInfo.objects.all()[:100]
    serializer_class = CPUSerializer