# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, verbose_name='ID', serialize=False)),
                ('Title', models.CharField(max_length=120)),
                ('Created_at', models.DateTimeField(auto_now_add=True)),
                ('Updated_at', models.DateTimeField(auto_now=True)),
            ],
        ),
        migrations.CreateModel(
            name='Expenses',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, verbose_name='ID', serialize=False)),
                ('Stuff_Name', models.CharField(max_length=120)),
                ('Price_Per_Piece', models.DecimalField(max_digits=10, decimal_places=False)),
                ('No_Of_Stuffs', models.IntegerField(default=0)),
                ('Time', models.DateTimeField(blank=True)),
                ('Total_Expenses', models.DecimalField(max_digits=10, decimal_places=False)),
                ('Created_at', models.DateTimeField(auto_now_add=True)),
                ('Updated_at', models.DateTimeField(auto_now=True)),
                ('Category', models.ForeignKey(to='newsletter.Category')),
            ],
        ),
    ]
