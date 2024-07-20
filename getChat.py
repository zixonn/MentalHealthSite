import datetime
from replit import db

def getChat():
  message = ""
  f = open("template/therapist/message.html", "r")
  message = f.read()
  f.close()
  keys = db.keys()
  keys = list(keys)
  result = ""
  recent = 0
  for key in keys:
    myMessage = message
    myMessage = myMessage.replace("{timestamp}", key)
    myMessage = myMessage.replace("{message}", db[key]["urmessage"])
    myMessage = myMessage.replace("{answer}", db[key]["Airesponse"])

    result += myMessage
    recent += 1
    if recent == 5:
      break
  return result