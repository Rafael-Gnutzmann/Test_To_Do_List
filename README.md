# To Do List App

Uma aplicação simples de lista de tarefas desenvolvida com **Django**, **Django REST Framework** e **AngularJS**.  
> Baseado no tutorial de Max Goodridge (YouTube).

## Tecnologias utilizadas

- [Django](https://www.djangoproject.com/)
- [Django REST Framework](https://www.django-rest-framework.org/)
- [AngularJS](https://angularjs.org/)
- HTML/CSS
- SQLite

## Como rodar o projeto localmente


## 1. Clone o repositório


```bash
git clone https://github.com/Rafael-Gnutzmann/Test_To_Do_List.git
cd Test_To_Do_List


## 2. Crie e ative um ambiente virtual:


# Linux/Mac
python -m venv venv
source venv/bin/activate

# Windows
python -m venv venv
venv\Scripts\activate


I## 3. Instale as dependências do projeto:


pip install -r base.txt


## 4. Aplique as migrações e inicie o servidor:


python manage.py migrate
python manage.py runserver


## 5. Acesse a aplicação no navegador:


http://127.0.0.1:8000/


Funcionalidades:
*Adicionar novas tarefas

*Listar tarefas existentes

*Marcar tarefas como concluídas

*Remover tarefas concluídas

*Comunicação com backend via API REST

