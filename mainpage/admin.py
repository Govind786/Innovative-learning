from django.contrib import admin

# Register your models here.
from .models import Register, Contact, Home

admin.site.register(Register)
admin.site.register(Contact)
admin.site.register(Home)