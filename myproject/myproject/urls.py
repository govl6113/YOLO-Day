"""myproject URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))


"""

from django import urls
from django.conf.urls import include
from django.contrib import admin
from django.urls import path
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path("admin/", admin.site.urls),
    path("", include("recommand.urls")),
    path("com_1/", include("com_1.urls")),
    path("com_2/", include("com_2.urls")),
    path("com_3/", include("com_3.urls")),
    path("com_4/", include("com_4.urls")),
    path("com_5/", include("com_5.urls")),
    path("com_6/", include("com_6.urls")),
    path("com_7/", include("com_7.urls")),
    path("com_8/", include("com_8.urls")),
    path("com_9/", include("com_9.urls")),
    path("com_10/", include("com_10.urls")),
    path("com_11/", include("com_11.urls")),
    path("com_12/", include("com_12.urls")),
    path("blog/", include("blog.urls")),
    path("accounts/", include("allauth.urls")),  # 구글
    path("single_page/", include("single_pages.urls")),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
