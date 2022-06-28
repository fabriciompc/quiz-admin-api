import { HttpResponse, HttpRequest } from './../protocols/http'
import { MissingParamError } from './../errors/missing-param-error'
import { RegisterQuestionController } from './registerQuestion'

describe('RegisterQuestionController', () => {
  test('Should return 400 with no question is provided ', () => {
    const sut = new RegisterQuestionController()
    const httpRequest: HttpRequest = {
      body: {
        answers: [
          {
            alternative: 1,
            statement: 'any_statement',
            isCorrectAnswer: false
          }
        ]
      }
    }
    const httpResponse: HttpResponse = sut.handle(httpRequest)

    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamError('question'))
  })
  test('Should return 400 with no answers is provided ', () => {
    const sut = new RegisterQuestionController()
    const httpRequest: HttpRequest = {
      body: {
        question: 'any_question'
      }
    }
    const httpResponse: HttpResponse = sut.handle(httpRequest)

    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamError('answers'))
  })

  test('Should return 200 with all fields is provided ', () => {
    const sut = new RegisterQuestionController()
    const httpRequest: HttpRequest = {
      body: {
        question: 'any_question',
        answers: [
          {
            alternative: 1,
            statement: 'any_statement',
            isCorrectAnswer: false
          }
        ]
      }
    }
    const httpResponse: HttpResponse = sut.handle(httpRequest)

    expect(httpResponse.statusCode).toBe(200)
    expect(httpResponse.body).toEqual({})
  })
})
