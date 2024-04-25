from django.db import models


class CpuInfo(models.Model):
    data = models.DecimalField(
        max_digits=8,
        decimal_places=2,
        verbose_name='CPU')
    date = models.DateTimeField(
        auto_now_add=True,
        verbose_name='Время')

    class Meta:
        db_table = 'CpuInfo'
        ordering = ('-id',)
        verbose_name = 'СPU'
        verbose_name_plural = 'СPU'
