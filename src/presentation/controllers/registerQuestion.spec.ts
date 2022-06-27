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
  })
})
