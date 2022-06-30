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
            isCorrectAnswer: 'any_value'
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

  test('Should return 400 with no alternative answer is provided ', () => {
    const sut = new RegisterQuestionController()
    const httpRequest: HttpRequest = {
      body: {
        question: 'any_question',
        answers: [
          {
            statement: 'any_statement',
            isCorrectAnswer: 'any_value'
          }
        ]
      }
    }
    const httpResponse: HttpResponse = sut.handle(httpRequest)

    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamError('alternative'))
  })

  test('Should return 400 with no statement answer is provided ', () => {
    const sut = new RegisterQuestionController()
    const httpRequest: HttpRequest = {
      body: {
        question: 'any_question',
        answers: [
          {
            alternative: 1,
            isCorrectAnswer: 'any_value'
          }
        ]
      }
    }
    const httpResponse: HttpResponse = sut.handle(httpRequest)

    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamError('statement'))
  })

  test('Should return 400 with no correctAnswer field answer is provided ', () => {
    const sut = new RegisterQuestionController()
    const httpRequest: HttpRequest = {
      body: {
        question: 'any_question',
        answers: [
          {
            alternative: 1,
            statement: 'any_statement'
          }
        ]
      }
    }
    const httpResponse: HttpResponse = sut.handle(httpRequest)

    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamError('isCorrectAnswer'))
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
            isCorrectAnswer: 'any_value'
          }
        ]
      }
    }
    const httpResponse: HttpResponse = sut.handle(httpRequest)

    expect(httpResponse.statusCode).toBe(200)
    expect(httpResponse.body).toEqual({})
  })
})
