import { RegisterQuestionController } from './registerQuestion'

describe('RegisterQuestionController', () => {
  test('Should return 400 with no question is provided ', () => {
    const sut = new RegisterQuestionController()
    const httpRequest = {
      body: {
        answers: [
          {
            alternative: 1,
            description: 'any_description',
            isCorrectAnswer: false
          }
        ]
      }
    }
    const httpResponse = sut.handle(httpRequest)

    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new Error('Missing param: question'))
  })
  test('Should return 400 with no answers is provided ', () => {
    const sut = new RegisterQuestionController()
    const httpRequest = {
      body: {
        question: 'any_question'
      }
    }
    const httpResponse = sut.handle(httpRequest)

    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new Error('Missing param: answers'))
  })
})
