'use strict'

/**
*Функция отечающая за обновление указанной задачи.
*Требуется:
*	1.Указать такой REST API URL предоставляемый RESTForms, чтобы
*	  получить обновить указанную задачу.
*	2.Указать тип запроса.
*	3.Заполнить обьект с отправляемыми данными согласно требованиям.
*/
function putTaskAJAX(id, task_status)
{
	/*id - id указанной задачи*/
	/*task_status - новый статус указанной задачи*/
	var put_obj = { /*Отправляемый обьект*/
	
	}

	var put_body = JSON.stringify(put_obj)

	$.ajax({
        url: '', /*Сюда введите URL запроса*/
        type: '', /*Сюда введите тип запроса*/
        contentType: 'application/json',









//===================Код не относящийся к заданию==========================================
        data: put_body,

        complete: function(data) {
			$('li#'+id).toggleClass('checked');
        },
        dataType: 'json'   
    });
}
//===========================================================================================
