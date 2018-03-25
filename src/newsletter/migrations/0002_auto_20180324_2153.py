# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('newsletter', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='expenses',
            old_name='Price_Per_Piece',
            new_name='Price',
        ),
    ]
