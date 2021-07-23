import { useCallback } from 'react';
import Head from 'next/head';
import { FiMail, FiPhone, FiUser } from 'react-icons/fi';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { Header } from '~/components/Header';
import { Footer } from '~/components/Footer';

import {
  Container,
  Wrapper,
  Content,
  ButtonContainer,
  Section,
  MoreInfo,
  MoreInfoContent,
  FormContainer,
  InputContent,
  TextareaContent,
  SubmitButton,
  ContactContainer,
} from '~/styles';

type SignInFormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

const formSchema = yup.object().shape({
  name: yup.string().required('Nome é obrigatório'),
  email: yup
    .string()
    .required('E-mail é obrigatório')
    .email('O e-mail precisa ser válido'),
  phone: yup
    .string()
    .min(11, 'O número deve conter DDD + Número')
    .required('Telefone obrigatório'),
  message: yup.string().required('A mesangem é obrigatória'),
});

export default function Home() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(formSchema),
  });
  const { errors } = formState;

  const handleSubmitForm: SubmitHandler<SignInFormData> = useCallback(
    async (data, event) => {
      await new Promise(resolve => setTimeout(resolve, 3000));
      event.preventDefault();
    },
    [],
  );

  return (
    <>
      <Head>
        <title>Início | Faz um bem!</title>
      </Head>

      <Container>
        <Header />

        <Wrapper>
          <div className="background_left" />
          <div className="background_right" />
          <Content>
            <div>
              <span>
                FAMÍLIAS EM SITUAÇÃO <br />
                DE <strong>VULNERABILIDADE</strong> PRECISAM DA{' '}
                <strong>SUA AJUDA!</strong>
              </span>

              <ButtonContainer>Quero ajudar!</ButtonContainer>
            </div>

            <img src="/imgs/main.svg" alt="Background" />
          </Content>
        </Wrapper>

        <Section id="about">
          <div>
            <img src="/imgs/about.svg" alt="Sobre" />

            <div />

            <div>
              <span>
                O que é o <strong>Faz um bem?</strong>
              </span>

              <p>
                “Faz um bem!” surge em um contexto de emergência de saúde
                pública mundial com a pandemia de Coronavírus Disease 2019
                (COVID-19) que intensifica a necessidade de ações sociais por
                parte da sociedade civil organizada e do Estado, especialmente
                através das políticas públicas e sociais. Trata-se de um projeto
                de caráter extensionista interdisciplinar, que visa desenvolver
                colaborativamente e impulsionar uma plataforma virtual
                interativa que centralize necessidades de instituições e
                organizações sociais de Santa Maria. Assim, Faz um bem!
                propõe-se como uma plataforma incentivadora e mediadora entre
                doadores e receptores de recursos.
              </p>
            </div>
          </div>

          <p>
            A plataforma se justifica pela necessidade constante das
            instituições e entidades de assistência social divulgarem suas ações
            e arrecadarem recursos com vistas à continuidade da prestação de
            serviços e de benefícios socioassistenciais, necessários para a
            subsistência de muitas famílias e melhoria das condições de vida na
            perspectiva do acesso e usufruto de seus direitos sociais. Essas
            necessidades são aumentadas no contexto da atual pandemia, que tem
            tido consequência para as esferas social, econômica e política.
          </p>

          <p>
            A plataforma conta com uma ampla equipe Coordenada por professores
            de diversos Centros da Universidade Federal de Santa Maria. Essa
            parceria permite a inclusão de estudantes de áreas de conhecimentos
            distintas, possibilitando o enriquecimento da formação acadêmica dos
            estudantes na perspectiva da interdisciplinaridade e do trabalho em
            equipe.
          </p>
        </Section>

        <MoreInfo>
          <MoreInfoContent>
            <div>
              <h1>Como funciona?</h1>

              <img src="/imgs/building.svg" alt="Como funciona?" />

              <p>
                A plataforma cadastra campanhas e instituições que possam{' '}
                <strong>fazer o bem</strong>. Você busca campanhas ou
                instituições e vê como pode ajudar. As ajudas funcionam
                diretamente com os promotores das campanhas, os quais abastecem
                a plataforma com informações.
              </p>
            </div>

            <div>
              <h1>Termos de uso</h1>

              <img src="/imgs/terms.svg" alt="Termos de uso" />

              <p>
                As intituições são responsáveis pelo conteúdo disponibilizado,
                assim como pela execução das doações.{' '}
                <strong>
                  <br />A plataforma não é responsável pela captação de
                  recursos, nem pela entrega às instituições.
                </strong>
              </p>
            </div>

            <div>
              <h1>Como apoiar?</h1>

              <img src="/imgs/map.svg" alt="Como apoiar?" />

              <p>
                Para ser um apoiador, ajude a divulgar essa plataforma, para que
                chegue a um número enorme de pessoas que possam fazer a
                diferença. Entre em contato pelo email:{' '}
                <strong>fazumbem@inf.ufsm.br</strong>
                <br /> e saiba mais.
              </p>
            </div>
          </MoreInfoContent>
        </MoreInfo>

        <ContactContainer id="contact">
          <div className="background_gray" />
          <div className="background_purple" />
          <div className="content">
            <img src="/imgs/contact.svg" alt="Contato" />

            <div>
              <FormContainer onSubmit={handleSubmit(handleSubmitForm)}>
                <h1>Entre em contato conosco!</h1>

                <InputContent
                  name="name"
                  icon={FiUser}
                  placeholder="Nome*"
                  error={errors.name}
                  {...register('name')}
                />
                <InputContent
                  name="phone"
                  icon={FiPhone}
                  placeholder="Telefone*"
                  error={errors.phone}
                  {...register('phone')}
                />
                <InputContent
                  name="email"
                  icon={FiMail}
                  placeholder="E-mail*"
                  error={errors.email}
                  {...register('email')}
                />

                <TextareaContent
                  name="message"
                  placeholder="Mensagem*"
                  error={errors.message}
                  {...register('message')}
                />

                <div>
                  <span>(Todos os campos* são obrigatórios)</span>
                  <SubmitButton type="submit">
                    {formState.isSubmitting ? 'Enviando...' : 'Enviar'}
                  </SubmitButton>
                </div>
              </FormContainer>
            </div>
          </div>
        </ContactContainer>
        <Footer />
      </Container>
    </>
  );
}
