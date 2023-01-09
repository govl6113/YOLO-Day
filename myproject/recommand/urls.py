from django.urls import path
from . import views
from . import views as recommand

urlpatterns = [
    path("", views.landing),
]
