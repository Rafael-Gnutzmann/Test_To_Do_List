from django.contrib import admin
from django.urls import path
from django.views.generic import TemplateView

from todo.views import ToDoListView, ToDoDetailView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', TemplateView.as_view(template_name='todo/index.html')),
    path('todo/api/', ToDoListView.as_view()),
    path('todo/api/<int:pk>/', ToDoDetailView.as_view()),
]
