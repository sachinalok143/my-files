# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('newsletter', '0002_auto_20180324_2153'),
    ]

    operations = [
        migrations.RenameField(
            model_name='expenses',
            old_name='Price',
            new_name='Price_Per_Piece',
        ),
    ]
