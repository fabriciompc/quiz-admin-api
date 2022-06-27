export class RegisterQuestionController {
  handle (httpRequest: any): any {
    if (!httpRequest.body.question) {
      return { statusCode: 400, body: new Error('Missing param: question') }
    }
    if (!httpRequest.body.answers) {
      return { statusCode: 400, body: new Error('Missing param: answers') }
    }
  }
}
