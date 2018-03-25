# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('newsletter', '0003_auto_20180324_2154'),
    ]

    operations = [
        migrations.AlterField(
            model_name='expenses',
            name='Price_Per_Piece',
            field=models.IntegerField(default=0),
        ),
        migrations.AlterField(
            model_name='expenses',
            name='Total_Expenses',
            field=models.IntegerField(default=0),
        ),
    ]
