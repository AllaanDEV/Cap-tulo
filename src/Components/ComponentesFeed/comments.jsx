import { PerfilIcon } from "../ComponentsForm/perfilIcon";
import { configuration} from "../svgCode";
const Icon = configuration;

export function Comments (){
    return(
         <li className="flex gap-2" key={c.id}>
                              <div className="flex flex-col items-start">
                                <PerfilIcon></PerfilIcon>
                              </div>
                              <div className="p-2 bg-background border border-border items-center  rounded-b-3xl rounded-tr-3xl">
                                <div className="flex gap-2">
                                  <p>{c?.author}</p>
                                  <p>@{c?.author}</p>
                                </div>
                                <p>{c?.text}</p>
                                <details className="flex flex-col items-end relative">
                                  <summary className="list-none marker:hidden">
                                    <Icon></Icon>
                                  </summary>
                                  <div className="bg-bermuda absolute left-2.5 px-2 rounded-sm">
                                    <button
                                      className="hover:text-wine"
                                      onClick={() => {
                                        toggleComments(2);
                                        SETEDIT(c.id);
                                      }}
                                    >
                                      Editar
                                    </button>
                                    <button
                                      className="hover:text-wine"
                                      onClick={ () => {
                                        commentDelete(c);
                                      }}
                                    >
                                      Excluir
                                    </button>
                                  </div>
                                </details>
                              </div>
                            </li>
    )
}