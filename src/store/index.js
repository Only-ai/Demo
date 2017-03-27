import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './action'
import ajax from '../config/ajax'


Vue.use(Vuex)

const state = {
	level: '心理测试',
	itemNum: 1,
	allTime: 0,
	timer: '',
	itemDetail: [{
		"topic_id": 20,
		"active_topic_id": 4,
		"type": "ONE",
		"topic_name": "1. 与人初次会面，经过一番交谈，你能对他(她)的举止谈吐、知识能力等方面作出积极、准确的评价吗？",
		"active_id": 1,
		"active_title": "",
		"active_topic_phase": "第一周",
		"active_start_time": "1479139200",
		"active_end_time": "1482163200",
		"topic_answer": [{
			"topic_answer_id": 66,
			"topic_id": 20,
			"answer_name": "不能",
			"is_standard_answer": 0
		}, {
			"topic_answer_id": 67,
			"topic_id": 20,
			"answer_name": "很难说",
			"is_standard_answer": 0
		}, {
			"topic_answer_id": 68,
			"topic_id": 20,
			"answer_name": "我想可以",
			"is_standard_answer": 0
		}]
	},
    {
		"topic_id": 21,
		"active_topic_id": 4,
		"type": "MORE",
		"topic_name": "2. 你和别人告别时，下次相会的时间地点是？",
		"active_id": 1,
		"active_title": "",
		"active_topic_phase": "第一周",
		"active_start_time": "1479139200",
		"active_end_time": "1482163200",
		"topic_answer": [{
			"topic_answer_id": 70,
			"topic_id": 21,
			"answer_name": "对方提出的",
			"is_standard_answer": 1
		}, {
			"topic_answer_id": 71,
			"topic_id": 21,
			"answer_name": "谁也没有提这事",
			"is_standard_answer": 0
		}, {
			"topic_answer_id": 72,
			"topic_id": 21,
			"answer_name": "我提议的",
			"is_standard_answer": 0
		}]
	},
    {
      "topic_id": 22,
      "active_topic_id": 4,
      "type": "MORE",
      "topic_name": "3. 当你第一次见到某个人，你的表情是？",
      "active_id": 1,
      "active_title": "",
      "active_topic_phase": "第一周",
      "active_start_time": "1479139200",
      "active_end_time": "1482163200",
      "topic_answer": [{
        "topic_answer_id": 70,
        "topic_id": 21,
        "answer_name": "热情诚恳，自然大法。",
        "is_standard_answer": 1
      }, {
        "topic_answer_id": 71,
        "topic_id": 21,
        "answer_name": "大大咧咧",
        "is_standard_answer": 0
      }, {
        "topic_answer_id": 72,
        "topic_id": 21,
        "answer_name": "紧张局促，羞怯不安",
        "is_standard_answer": 0
      }]
    },
      {
        "topic_id": 23,
        "active_topic_id": 4,
        "type": "MORE",
        "topic_name": "4. 你是否在寒暄之后，很快就找到双方共同感兴趣的话题？",
        "active_id": 1,
        "active_title": "",
        "active_topic_phase": "第一周",
        "active_start_time": "1479139200",
        "active_end_time": "1482163200",
        "topic_answer": [{
          "topic_answer_id": 70,
          "topic_id": 21,
          "answer_name": "是的，对此我很敏锐。",
          "is_standard_answer": 1
        }, {
          "topic_answer_id": 71,
          "topic_id": 21,
          "answer_name": "我觉得这很难。",
          "is_standard_answer": 0
        }, {
          "topic_answer_id": 72,
          "topic_id": 21,
          "answer_name": "必须经过较长一段时间才能找到。",
          "is_standard_answer": 0
        }]
      },
        {
          "topic_id": 24,
          "active_topic_id": 4,
          "type": "MORE",
          "topic_name": "5. 假若别人谈到了你兴趣索然的话题，你将？",
          "active_id": 1,
          "active_title": "",
          "active_topic_phase": "第一周",
          "active_start_time": "1479139200",
          "active_end_time": "1482163200",
          "topic_answer": [{
            "topic_answer_id": 70,
            "topic_id": 21,
            "answer_name": "打断别人，另起一题。",
            "is_standard_answer": 1
          }, {
            "topic_answer_id": 71,
            "topic_id": 21,
            "answer_name": "显得沉闷，忍耐。",
            "is_standard_answer": 0
          }, {
            "topic_answer_id": 72,
            "topic_id": 21,
            "answer_name": "仍然认真听，从中寻找乐趣。",
            "is_standard_answer": 0
          }]
    }
],
	answerid: {}
}

export default new Vuex.Store({
	state,
	actions,
	mutations
})
