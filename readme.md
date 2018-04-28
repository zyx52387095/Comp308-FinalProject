# 功能接口

* 登录入口
病人： /login/patient
  请求地址： post  /api/login/patient
  发送： {patientid:xx, password:xxxx}
  返回： {status:1 或者 0, patientId:xx}
护士： /login/nurse
  请求地址： post  /api/login/nurse
  发送： {username:xx, password:xxxx}
  返回： {status:1 或者 0, patientId:xx}

* 病人
自己注册页面： /patient/register
  请求地址： post  /api/patient/register
  发送： post  {patientid:xx , username:xxx, password:xxx, fullname:xxx}
  返回： {status: 1 / 0}
自己的症状页面： /patient/home
  请求地址： post  /api/patient/symptoms
  发送： post  {patientid:xx , fever:xxx, headache:xxx, cough:xxx, diarrhea, dizziness}
  返回： {status: 1 / 0}

* 护士功能
病人列表： /nurse/patient-list
  请求: /api/patient-list
  返回： 病人的对象数组
病人具体信息页： /nurse/patient-vitalsign/#id
  请求：/api/patient-vitalsign/id
  返回： 病人对象



