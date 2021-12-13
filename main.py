import datetime

import firebase_admin
import time
from email.message import EmailMessage
from email.mime.text import MIMEText
import praw
import smtplib
from datetime import date

from firebase_admin import credentials
from firebase_admin import firestore

cred = credentials.Certificate("serviceAccountKey.json")
firebase_admin.initialize_app(cred)

db = firestore.client()


# for i in db.collections():
#     print(i.doc().id())
#
# for i in db.collections():
#     for document in db.collection(i).get():
#         var = document.to_dict()
#         print(var)


while True:
    for i in db.collections():
        monthly = 0
        user = ''

        for item in i.get():
            data = item.to_dict()

            if "total" not in data:
                monthly += int(item.to_dict()['price'])
                user = item.to_dict()['userId']


        if monthly != 0:
            print(user, monthly)
            db.collection(f'{user}total').document('total').update(
                {'total': monthly}
            )

    time.sleep(5)

