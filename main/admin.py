from django.contrib import admin
from .models import Teacher
from .models import CourseCategory
from .models import Course


@admin.register(Teacher)
class AuthorAdmin(admin.ModelAdmin):
    pass


@admin.register(CourseCategory)
class AuthorAdmin(admin.ModelAdmin):
    pass


@admin.register(Course)
class AuthorAdmin(admin.ModelAdmin):
    pass
