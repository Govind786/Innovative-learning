# Generated by Django 3.2.1 on 2021-07-18 09:23

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Music',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('s_no', models.IntegerField(auto_created=True)),
                ('music', models.FileField(blank=True, upload_to='music/music_options/')),
            ],
        ),
    ]
