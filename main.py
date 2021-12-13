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
    monthly = 0
    for i in db.collection('116370148238282853244').get():
        var = i.to_dict()['price']

        monthly += int(var)

    data = {"total": monthly}
    db.collection('116370148238282853244total').document("dzyrfBt61svmvQM3nSX7").update(data)
    print("104053028103976474718total", monthly)

    monthly = 0
    for i in db.collection('104053028103976474718').get():
        var = i.to_dict()['price']

        monthly += int(var)

    data = {"total": monthly}
    db.collection('104053028103976474718total').document("kS52wIsSlF8vxZVwghbC").update(data)
    time.sleep(5)
    print("104053028103976474718total", monthly)

