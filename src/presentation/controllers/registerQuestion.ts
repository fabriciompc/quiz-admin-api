import { badRequest } from '../helpers/http-helper'
import { HttpResponse } from '../protocols/http'
import { MissingParamError } from './../errors/missing-param-error'
import { HttpRequest } from './../protocols/http'

export class RegisterQuestionController {
  handle(httpRequest: HttpRequest): HttpResponse {
    const requiredFields = ['question', 'answers']
    const answersRequiredFields = [
      'alternative',
      'statement',
      'isCorrectAnswer'
    ]

    for (const field of requiredFields) {
      if (!httpRequest.body[field]) {
        return badRequest(new MissingParamError(field))
      }
    }

    for (const answerField of answersRequiredFields) {
      for (const field of httpRequest.body?.answers) {
        if (!field[answerField]) {
          return badRequest(new MissingParamError(answerField))
        }
      }
    }
    const response: HttpResponse = { statusCode: 200, body: {} }
    return response
  }
}
