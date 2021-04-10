from django.contrib import admin
from .models import Reviews

# Register your models here.
class ReviewsAdmin(admin.ModelAdmin):
    readonly_fields = ('id',)

admin.site.register(Reviews,ReviewsAdmin)