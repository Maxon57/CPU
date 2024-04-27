from django.shortcuts import render
from .models import CpuInfo


def index(request):
    data = CpuInfo.objects.all()[:100]
    return render(request, 'cpu/index.html', {'data': data})
