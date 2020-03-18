import mockjs from 'mockjs';
let Random = mockjs.Random
export default
  {
    '/api/days': mockjs.mock({
      'days|3-9': [
        {
          'id|+1': 1,
          date: '@date',
          'detail|3': [
            {
              time: '@time',
              name: '@cname',
              title: '@ctitle(4,9)',
              add: Random.county(true)
            }
          ]
        }
      ]
    })
  }