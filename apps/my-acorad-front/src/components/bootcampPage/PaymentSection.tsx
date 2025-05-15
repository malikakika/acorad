import {
  FaMoneyCheckAlt,
  FaUniversity,
  FaShieldAlt,
  FaEnvelopeOpenText,
  FaExclamationTriangle,
  FaUserCheck,
  FaTimesCircle,
  FaRetweet,
} from 'react-icons/fa';

export const PaymentSection = () => {
  return (
    <section
      className="bg-white py-24 px-6 sm:px-12 lg:px-32"
      role="region"
      aria-labelledby="payment-heading"
    >
      <div className="max-w-4xl mx-auto space-y-12">
        <h2
          id="payment-heading"
          className="text-4xl sm:text-5xl font-extrabold text-primary-blue text-center"
        >
          Payment & Cancellation
        </h2>

        <div className="bg-gradient-to-br from-vanilla to-white p-10 rounded-3xl shadow-xl border border-gray-200 space-y-10 text-base text-gray-800 leading-relaxed">
          <section aria-labelledby="payment-method">
            <h3 className="text-2xl font-semibold text-primary-blue flex items-center gap-3 mb-2">
              <FaMoneyCheckAlt
                className="text-accent-blue text-2xl"
                aria-hidden="true"
              />
              <span id="payment-method">Payment Method</span>
            </h3>
            <p>
              Payment is required <strong>before the Bootcamp</strong> and must
              be completed at the time of registration via{' '}
              <strong>bank transfer</strong>. Both national and international
              payments are accepted.
            </p>
            <p className="mt-2 flex items-center gap-2">
              <FaEnvelopeOpenText
                className="text-primary-blue"
                aria-hidden="true"
              />
              For payment inquiries, email:{' '}
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=contact@acoradacademy.com&su=Question%20about%20payment&body=Hello,%0A%0AI have a question regarding the conference payment.%0A%0A[Please write your question here]%0A%0AThank you!"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-accent-blue font-medium"
                aria-label="Send payment questions to contact@acoradacademy.com"
              >
                contact@acoradacademy.com
              </a>
            </p>
          </section>

          <section aria-labelledby="account-details">
            <h3 className="text-2xl font-semibold text-primary-blue flex items-center gap-3 mb-2">
              <FaUniversity
                className="text-yellow-600 text-2xl"
                aria-hidden="true"
              />
              <span id="account-details">Bank Account Details</span>
            </h3>
            <ul className="space-y-2 text-gray-700 pl-1">
              <li className="flex items-center gap-3">
                <FaUniversity
                  className="text-primary-blue"
                  aria-hidden="true"
                />
                <strong>Bank:</strong> BMCE Bank
              </li>
              <li className="flex items-center gap-3">
                <FaMoneyCheckAlt
                  className="text-primary-blue"
                  aria-hidden="true"
                />
                <strong>Account Number:</strong>{' '}
                <span className="select-all">011330000001210006612229</span>
              </li>
            </ul>
          </section>

          <section aria-labelledby="security-warning">
            <h3 className="text-2xl font-semibold text-primary-blue flex items-center gap-3 mb-2">
              <FaShieldAlt
                className="text-red-500 text-2xl"
                aria-hidden="true"
              />
              <span id="security-warning">Security Notice</span>
            </h3>
            <div className="flex items-start gap-3 bg-red-50 border border-red-300 text-sm text-red-800 p-4 rounded-xl">
              <FaExclamationTriangle
                className="text-red-500 text-lg mt-1"
                aria-hidden="true"
              />
              <p>
                Always verify the bank account details before transferring.
                Never share credentials. If in doubt, please contact us
                immediately.
              </p>
            </div>
          </section>

          <section aria-labelledby="cancellation-policy">
            <h3 className="text-2xl font-semibold text-primary-blue flex items-center gap-3 mb-2 border-t pt-6">
              <FaRetweet
                className="text-primary-blue text-2xl"
                aria-hidden="true"
              />
              <span id="cancellation-policy">Cancellation Policy</span>
            </h3>
            <ul className="text-sm text-gray-700 list-none space-y-3 pl-1">
              <li className="flex items-center gap-3">
                <FaUserCheck className="text-green-600" aria-hidden="true" />
                <span>
                  <strong>Replacements</strong> are welcome at any time.
                </span>
              </li>
              <li className="flex items-center gap-3">
                <FaTimesCircle className="text-yellow-500" aria-hidden="true" />
                <span>
                  <strong>Cancellation ≥ 14 days</strong> before the event:
                  <strong> 50% fee</strong>.
                </span>
              </li>
              <li className="flex items-center gap-3">
                <FaTimesCircle className="text-red-500" aria-hidden="true" />
                <span>
                  <strong>Cancellation &lt; 7 days</strong> before the event:
                  <strong> No refund</strong>.
                </span>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelopeOpenText
                  className="text-primary-blue"
                  aria-hidden="true"
                />
                <span>
                  All cancellations must be sent by email (in writing).
                </span>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </section>
  );
};
